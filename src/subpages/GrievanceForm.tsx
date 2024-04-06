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
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Scholar ID:
        <input {...register('scholarId', { required: true })} />
      </label>
      <label>
        Issue:
        <textarea {...register('issue', { required: true })} />
      </label>
      <label>
        Category of Issue:
        <select {...register('category', { required: true })}>
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
          <option value="category3">Category 3</option>
          {/* Add more categories as needed */}
        </select>
      </label>
      <input type="submit" />
    </form>
  );
};

export default GrievanceForm;