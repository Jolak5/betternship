import EmployersForm from "./EmployersForm";

const EmployersPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
      <div >
        <h1 className="text-4xl font-semibold mb-6 text-primary ">Send Us A Message</h1>
        <EmployersForm />
      </div>
    </div>
  );
};

export default EmployersPage;
