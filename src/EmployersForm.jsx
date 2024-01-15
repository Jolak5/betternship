import { useForm } from 'react-hook-form';
import Select from 'react-select';

const EmployersForm = () => {
  const { register, handleSubmit, watch } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission logic here
  };

  return (
    <form className="max-w-xl mx-auto bg-white p-8 border border-secondary rounded-lg shadow-md w-fit">
      <div className="mb-3 flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
          <label htmlFor="organization" className="block text-sm font-semibold text-gray-600  mb-3">Name of Organization</label>
          <input
            type="text"
            id="organization"
            {...register('organization', { required: true })}
            className="input border border-black focus:border-red-500 rounded"
          />
        </div>

        <div className="w-full md:w-1/2 px-4">
          <label htmlFor="email" className="block text-sm font-semibold text-gray-600 mb-3">Email</label>
          <input
            type="email"
            id="email"
            {...register('email', { required: true })}
            className="input border border-black focus:border-red-500 rounded"
          />
        </div>
      </div>

      <div className="mb-4 flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-600 mb-3">Phone number</label>
          <input
            type="tel"
            id="phone"
            {...register('phone', { required: true })}
            className="input border border-black focus:border-red-500"
          />
        </div>

        <div className="w-full md:w-1/2 px-4">
          <label htmlFor="contactPerson" className="block text-sm font-semibold text-gray-600 mb-3">Name of the contact person</label>
          <input
            type="text"
            id="contactPerson"
            {...register('contactPerson', { required: true })}
            className="input border border-black focus:border-red-500 rounded"
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="industry" className="block text-sm font-semibold text-gray-600 mb-3">Industry</label>
        <Select
          id="industry"
          {...register('industry', { required: true })}
          options={[
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
                    ]}
          className="input border border-black focus:border-red-500 rounded"
        />
      </div>

      <div className="mb-4 flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
          <label className="block text-sm font-semibold text-gray-600 mb-3">Payment Status</label>
          <div className="flex">
            <label className="mr-4">
              <input
                type="radio"
                value="paid"
                {...register('paymentStatus')}
                className="mr-1"
              />
              Paid
            </label>
            <label>
              <input
                type="radio"
                value="unpaid"
                {...register('paymentStatus')}
                className="mr-1 rounded"
              />
              Unpaid
            </label>
          </div>
        </div>

        {watch('paymentStatus') === 'paid' && (
          <div className="w-full md:w-1/2 px-4">
            <label htmlFor="amountRange" className="block text-sm font-semibold text-gray-600 mb-3">Amount Range</label>
            <input
              type="number"
              id="amountRange"
              {...register('amountRange', { required: true })}
              className="input border border-black focus:border-red-500 rounded"
            />
          </div>
        )}
      </div>

      <div className='flex gap-5'>

      <div className="mb-4">
        <label htmlFor="website" className="block text-sm font-semibold text-gray-600 mb-3">Website</label>
        <input
          type="url"
          id="website"
          {...register('website', { required: true })}
          className="input border border-black focus:border-red-500 rounded"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="country" className="block text-sm font-semibold text-gray-600 mb-3">Country</label>
        <input
          type="text"
          id="country"
          {...register('country', { required: true })}
          className="input border border-black focus:border-red-500 rounded"
        />
      </div>
      </div>
      <div className='flex gap-5'>
      <div className="mb-4">
        <label htmlFor="linkedin" className="block text-sm font-semibold text-gray-600 mb-3">LinkedIn</label>
        <input
          type="url"
          id="linkedin"
          {...register('linkedin', { required: true })}
          className="input border border-black focus:border-red-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="facebook" className="block text-sm font-semibold text-gray-600 mb-3">Facebook</label>
        <input
          type="url"
          id="facebook"
          {...register('facebook', { required: true })}
          className="input border border-black focus:border-red-500 rounded"
        />
      </div>
      </div>

      <div className="mb-4">
        <label htmlFor="twitter" className="block text-sm font-semibold text-gray-600 mb-3">Twitter</label>
        <input
          type="url"
          id="twitter"
          {...register('twitter', { required: true })}
          className="input border border-black focus:border-red-500 rounded"
        />
      </div>

      <button type="submit" className="bg-tertiary text-black text-bold px-4 py-2 rounded-md hover:bg-blue-600 mb-3">
        Submit
      </button>
    </form>
  );
};

export default EmployersForm;
