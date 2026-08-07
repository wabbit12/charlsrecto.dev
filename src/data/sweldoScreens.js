import sweldoLanding from '../assets/images/Sweldo/screens/public/01-landing.webp';
import sweldoLogin from '../assets/images/Sweldo/screens/public/02-login.webp';
import sweldoSignup from '../assets/images/Sweldo/screens/public/03-signup.webp';
import sweldoSuperAdminDashboard from '../assets/images/Sweldo/screens/super-admin/01-dashboard.webp';
import sweldoSuperAdminEmployees from '../assets/images/Sweldo/screens/super-admin/02-employees.webp';
import sweldoSuperAdminPayrolls from '../assets/images/Sweldo/screens/super-admin/03-payrolls.webp';
import sweldoSuperAdminReports from '../assets/images/Sweldo/screens/super-admin/04-reports.webp';
import sweldoSuperAdminAudit from '../assets/images/Sweldo/screens/super-admin/05-audit.webp';
import sweldoSuperAdminNotifications from '../assets/images/Sweldo/screens/super-admin/06-notifications.webp';
import sweldoSuperAdminEmployeeDetail from '../assets/images/Sweldo/screens/super-admin/10-employee-detail.webp';
import sweldoSuperAdminPayRunDetail from '../assets/images/Sweldo/screens/super-admin/10-pay-run-detail.webp';
import sweldoPayrollDashboard from '../assets/images/Sweldo/screens/payroll-admin/01-dashboard.webp';
import sweldoPayrollPayrolls from '../assets/images/Sweldo/screens/payroll-admin/02-payrolls.webp';
import sweldoPayrollReports from '../assets/images/Sweldo/screens/payroll-admin/03-reports.webp';
import sweldoPayrollPayRunDetail from '../assets/images/Sweldo/screens/payroll-admin/10-pay-run-detail.webp';
import sweldoHrEmployees from '../assets/images/Sweldo/screens/hr-admin/01-employees.webp';
import sweldoHrDashboard from '../assets/images/Sweldo/screens/hr-admin/02-dashboard.webp';
import sweldoHrEmployeeDetail from '../assets/images/Sweldo/screens/hr-admin/10-employee-detail.webp';
import sweldoManagerApprovals from '../assets/images/Sweldo/screens/manager/01-approvals.webp';
import sweldoManagerDashboard from '../assets/images/Sweldo/screens/manager/02-dashboard.webp';
import sweldoManagerNotifications from '../assets/images/Sweldo/screens/manager/03-notifications.webp';
import sweldoManagerTimesheetReview from '../assets/images/Sweldo/screens/manager/10-timesheet-review.webp';
import sweldoEmployeeProfile from '../assets/images/Sweldo/screens/employee-ana/01-profile.webp';
import sweldoEmployeeTimesheets from '../assets/images/Sweldo/screens/employee-ana/02-timesheets.webp';
import sweldoEmployeePayslips from '../assets/images/Sweldo/screens/employee-ana/03-payslips.webp';
import sweldoEmployeeDashboard from '../assets/images/Sweldo/screens/employee-ana/04-dashboard.webp';
import sweldoEmployeeBenTimesheets from '../assets/images/Sweldo/screens/employee-ben/01-timesheets.webp';
import sweldoEmployeeBenPayslips from '../assets/images/Sweldo/screens/employee-ben/02-payslips.webp';
import sweldoEmployeeBenProfile from '../assets/images/Sweldo/screens/employee-ben/03-profile.webp';

const sweldoScreens = [
  {
    id: 'public',
    category: 'Public',
    description: 'Landing, login, and signup for new teams.',
    images: [
      { src: sweldoLanding, label: 'Landing' },
      { src: sweldoLogin, label: 'Login' },
      { src: sweldoSignup, label: 'Sign Up' },
    ],
  },
  {
    id: 'super-admin',
    category: 'Super Admin',
    description: 'Full workspace control — HR, payroll, reports, and audit.',
    images: [
      { src: sweldoSuperAdminDashboard, label: 'Dashboard' },
      { src: sweldoSuperAdminEmployees, label: 'Employees' },
      { src: sweldoSuperAdminEmployeeDetail, label: 'Employee Detail' },
      { src: sweldoSuperAdminPayrolls, label: 'Payrolls' },
      { src: sweldoSuperAdminPayRunDetail, label: 'Pay Run Detail' },
      { src: sweldoSuperAdminReports, label: 'Reports' },
      { src: sweldoSuperAdminAudit, label: 'Audit Trail' },
      { src: sweldoSuperAdminNotifications, label: 'Notifications' },
    ],
  },
  {
    id: 'payroll-admin',
    category: 'Payroll Admin',
    description: 'Pay periods, calculations, and payroll reports.',
    images: [
      { src: sweldoPayrollDashboard, label: 'Dashboard' },
      { src: sweldoPayrollPayrolls, label: 'Pay Runs' },
      { src: sweldoPayrollPayRunDetail, label: 'Pay Run Detail' },
      { src: sweldoPayrollReports, label: 'Reports' },
    ],
  },
  {
    id: 'hr-admin',
    category: 'HR Admin',
    description: 'Employee records, departments, and employment details.',
    images: [
      { src: sweldoHrDashboard, label: 'Dashboard' },
      { src: sweldoHrEmployees, label: 'Employees' },
      { src: sweldoHrEmployeeDetail, label: 'Employee Detail' },
    ],
  },
  {
    id: 'manager',
    category: 'Manager',
    description: 'Timesheet approvals, review, and team notifications.',
    images: [
      { src: sweldoManagerDashboard, label: 'Dashboard' },
      { src: sweldoManagerApprovals, label: 'Approvals' },
      { src: sweldoManagerTimesheetReview, label: 'Timesheet Review' },
      { src: sweldoManagerNotifications, label: 'Notifications' },
    ],
  },
  {
    id: 'employee-ana',
    category: 'Employee — Ana',
    description: 'Profile, hours, and payslips from the employee side.',
    images: [
      { src: sweldoEmployeeDashboard, label: 'Dashboard' },
      { src: sweldoEmployeeProfile, label: 'Profile' },
      { src: sweldoEmployeeTimesheets, label: 'Timesheets' },
      { src: sweldoEmployeePayslips, label: 'Payslips' },
    ],
  },
  {
    id: 'employee-ben',
    category: 'Employee — Ben',
    description: 'A second employee view of timesheets, payslips, and profile.',
    images: [
      { src: sweldoEmployeeBenTimesheets, label: 'Timesheets' },
      { src: sweldoEmployeeBenPayslips, label: 'Payslips' },
      { src: sweldoEmployeeBenProfile, label: 'Profile' },
    ],
  },
];

export default sweldoScreens;
