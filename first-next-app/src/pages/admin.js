import DashboardLayout from '@/components/Layouts/DashboardLayout';


const Admin = () => {
    return (
        <div>
            This is admin page

        </div>
    );
};

export default Admin;

Admin.getLayout = function getLayout(page) {
    return <DashboardLayout>{ page }</DashboardLayout>
}
