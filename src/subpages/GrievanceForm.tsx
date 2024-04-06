import React from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
    scholarId: string;
    issue: string;
    category: string;
};

const GrievanceForm: React.FC = () => {
    const { register, handleSubmit } = useForm<FormData>();
    const onSubmit = (data: FormData) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form-container">
            <label className="block flex flex-col">
                <span className="text-gray-700">Scholar ID:</span>
                <input {...register('scholarId', { required: true })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </label>
            <label className="block flex flex-col">
                <span className="text-gray-700">Issue:</span>
                <textarea {...register('issue', { required: true })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </label>
            <label className="block flex flex-col">
                <span className="text-gray-700">Category of Issue:</span>
                <select {...register('category', { required: true })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                    <option value="category3">Category 3</option>
                    {/* Add more categories as needed */}
                </select>
            </label>
            <input type="submit" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 cursor-pointer bg-indigo-600 text-white" />
        </form>
    );
};

export default GrievanceForm;