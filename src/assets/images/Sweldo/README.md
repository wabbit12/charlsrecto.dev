# Portfolio screenshots

Optimized WebP screenshots (from retina 2x captures) of the live Sweldo app with demo seed data.

## Regenerate

```powershell
# terminal 1
npm run dev

# terminal 2 (after seed if needed)
npm run seed:demo
npm run portfolio:shots
```

Output lands in `portfolio/screens/`.

## What’s included

| Folder | Role | Highlights |
|---|---|---|
| `public/` | — | Landing, login, signup |
| `super-admin/` | admin@demo.local | Dashboard, HR, payroll, reports, audit, detail pages |
| `payroll-admin/` | payroll@demo.local | Dashboard, pay runs, reports |
| `hr-admin/` | hr@demo.local | Employees + detail |
| `manager/` | manager@demo.local | Approvals + timesheet review |
| `employee-ana/` | ana@demo.local | Profile, timesheets, payslips |
| `employee-ben/` | ben@demo.local | Timesheets, payslips, profile |

Password for all demo accounts: `Demo1234!`

See also `screens/README.md` for an image gallery index.
