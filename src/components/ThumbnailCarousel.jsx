import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';

const FULL_WIDTH_PX = 120;
const COLLAPSED_WIDTH_PX = 35;
const GAP_PX = 2;
const MARGIN_PX = 2;

function Thumbnails({ items, index, setIndex }) {
  const thumbnailsRef = useRef(null);

  useEffect(() => {
    if (!thumbnailsRef.current) return;

    let scrollPosition = 0;
    for (let i = 0; i < index; i++) {
      scrollPosition += COLLAPSED_WIDTH_PX + GAP_PX;
    }
    scrollPosition += MARGIN_PX;

    const containerWidth = thumbnailsRef.current.offsetWidth;
    const centerOffset = containerWidth / 2 - FULL_WIDTH_PX / 2;
    scrollPosition -= centerOffset;

    thumbnailsRef.current.scrollTo({
      left: scrollPosition,
      behavior: 'smooth',
    });
  }, [index]);

  return (
    <div
      ref={thumbnailsRef}
      className="overflow-x-auto"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <style>{`
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div className="flex gap-0.5 h-20 pb-2" style={{ width: 'fit-content' }}>
        {items.map((item, i) => (
          <motion.button
            key={item.id}
            type="button"
            onClick={() => setIndex(i)}
            initial={false}
            animate={i === index ? 'active' : 'inactive'}
            variants={{
              active: {
                width: FULL_WIDTH_PX,
                marginLeft: MARGIN_PX,
                marginRight: MARGIN_PX,
              },
              inactive: {
                width: COLLAPSED_WIDTH_PX,
                marginLeft: 0,
                marginRight: 0,
              },
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative shrink-0 h-full overflow-hidden rounded bg-neutral-800"
            aria-label={`View ${item.title}`}
            aria-pressed={i === index}
          >
            <img
              src={item.url}
              alt={item.title}
              className="w-full h-full object-cover pointer-events-none select-none"
              draggable={false}
              loading="lazy"
              decoding="async"
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
}

export default function ThumbnailCarousel({
  items = [],
  onImageClick,
  className = '',
  eager = false,
}) {
  const [index, setIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isVisible, setIsVisible] = useState(eager);
  const [loaded, setLoaded] = useState(() => new Set(eager ? [0, 1] : []));
  const rootRef = useRef(null);
  const containerRef = useRef(null);
  const x = useMotionValue(0);

  useEffect(() => {
    setIndex(0);
  }, [items]);

  // Mount / start loading only when the carousel enters the viewport
  useEffect(() => {
    if (eager || isVisible) return undefined;
    const node = rootRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [eager, isVisible]);

  // Keep current + neighbors warm; defer the rest
  useEffect(() => {
    if (!isVisible) return;
    setLoaded((prev) => {
      const next = new Set(prev);
      for (let i = Math.max(0, index - 1); i <= Math.min(items.length - 1, index + 1); i++) {
        next.add(i);
      }
      return next;
    });
  }, [index, items.length, isVisible]);

  useEffect(() => {
    if (!isDragging && containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth || 1;
      const targetX = -index * containerWidth;

      animate(x, targetX, {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      });
    }
  }, [index, x, isDragging]);

  if (!items.length) return null;

  const current = items[index];

  return (
    <div ref={rootRef} className={`w-full max-w-3xl mx-auto ${className}`}>
      <div className="flex flex-col gap-3">
        <div
          className="relative overflow-hidden rounded-lg bg-neutral-800"
          ref={containerRef}
        >
          {isVisible ? (
            <motion.div
              className="flex"
              drag="x"
              dragElastic={0.2}
              dragMomentum={false}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={(_e, info) => {
                setIsDragging(false);
                const containerWidth = containerRef.current?.offsetWidth || 1;
                const offset = info.offset.x;
                const velocity = info.velocity.x;

                let newIndex = index;

                if (Math.abs(velocity) > 500) {
                  newIndex = velocity > 0 ? index - 1 : index + 1;
                } else if (Math.abs(offset) > containerWidth * 0.3) {
                  newIndex = offset > 0 ? index - 1 : index + 1;
                }

                newIndex = Math.max(0, Math.min(items.length - 1, newIndex));
                setIndex(newIndex);
              }}
              style={{ x }}
            >
              {items.map((item, i) => (
                <div
                  key={item.id}
                  className="shrink-0 w-full h-[280px] sm:h-[360px] lg:h-[400px] bg-neutral-800"
                  onClick={() => {
                    if (isDragging) return;
                    onImageClick?.({ src: item.url, label: item.title });
                  }}
                  role={onImageClick ? 'button' : undefined}
                  tabIndex={onImageClick ? 0 : undefined}
                  onKeyDown={
                    onImageClick
                      ? (e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            onImageClick({ src: item.url, label: item.title });
                          }
                        }
                      : undefined
                  }
                  style={{ cursor: onImageClick ? 'zoom-in' : 'default' }}
                >
                  {loaded.has(i) ? (
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-cover object-top rounded-lg select-none pointer-events-none"
                      draggable={false}
                      loading={i === index ? 'eager' : 'lazy'}
                      decoding="async"
                      fetchPriority={i === index ? 'high' : 'auto'}
                    />
                  ) : null}
                </div>
              ))}
            </motion.div>
          ) : (
            <div className="h-[280px] sm:h-[360px] lg:h-[400px]" />
          )}

          <motion.button
            type="button"
            disabled={index === 0}
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            className={`absolute left-4 text-black top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform z-10
              ${
                index === 0
                  ? 'opacity-40 cursor-not-allowed bg-white/40'
                  : 'bg-white hover:scale-110 hover:opacity-100 opacity-70'
              }`}
            aria-label="Previous screen"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.button>

          <motion.button
            type="button"
            disabled={index === items.length - 1}
            onClick={() => setIndex((i) => Math.min(items.length - 1, i + 1))}
            className={`absolute text-black right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform z-10
              ${
                index === items.length - 1
                  ? 'opacity-40 cursor-not-allowed bg-white/40'
                  : 'bg-white hover:scale-110 hover:opacity-100 opacity-70'
              }`}
            aria-label="Next screen"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm tabular-nums">
            {index + 1} / {items.length}
          </div>
        </div>

        {current?.title && (
          <p className="text-center text-sm font-medium text-muted">{current.title}</p>
        )}

        {isVisible ? (
          <Thumbnails items={items} index={index} setIndex={setIndex} />
        ) : (
          <div className="h-20" />
        )}
      </div>
    </div>
  );
}
