import React from 'react';
import { useForm } from 'react-hook-form';
import styled from "styled-components";

type FormData = {
    scholarId: string;
    issue: string;
    category: string;
};

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    background-color: #1a202c;
    color: #a0aec0;
    border-radius: 10px;
    width: 80vw; // 80% of viewport width
    height: 80vh; // 80% of viewport height
    justify-content: center; // center items vertically in the form
    align-items: center; // center items horizontally in the form
`;

const Label = styled.label`
    display: flex;
    flex-direction: row; // Change to row direction
    justify-content: space-between; // Add space between the label and the form field
    align-items: center; // Vertically align the label and the form field
    font-size: 1.5em;
    font-weight: bold;
    text-transform: uppercase;
    padding: 10px 0;
    color: #a0aec0;
    width: 70%; // Match the width of the form fields
`;

const Input = styled.input`
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: #2d3748;
    color: #a0aec0;
    width: 70%; // Increase the width
    height: 40px; // Increase the height
`;

const TextArea = styled.textarea`
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: #2d3748;
    color: #a0aec0;
    width: 70%; // Increase the width
    height: 100px; // Increase the height
`;

const Select = styled.select`
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: #2d3748;
    color: #a0aec0;
    width: 70%; // Increase the width
    height: 40px; // Increase the height
`;

const GrievanceForm: React.FC = () => {
    const { register, handleSubmit } = useForm<FormData>();
    const onSubmit = (data: FormData) => {
        console.log(data);
        fetch('https://script.google.com/macros/s/AKfycbyip9p8yWe0GjtyRw7ztdhFUIk9W_HO7Bt-5UBeINarsOIBK2NkzmEg1wtDwmpQfsW8/exec', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization' : `Bearer ${}`,
            },
            body: JSON.stringify(data)
        })
            .then(response => console.log(response))
            .catch(error => console.error('Error:', error));
        // appendData([data.scholarId, data.issue, data.category]);
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Label>
                Scholar ID:
                <Input {...register('scholarId', { required: true })} />
            </Label>
            <Label>
                Issue:
                <TextArea {...register('issue', { required: true })} />
            </Label>
            <Label>
                Category of Issue:
                <Select {...register('category', {required: true})}>
                    <option value="lan">LAN</option>
                    <option value="mess">Mess</option>
                    <option value="room">Room Related</option>
                    <option value="water">Water</option>
                    <option value="recommendation">Recommendations</option>
                    <option value="others">Others</option>
                    {/* Add more categories as needed */}
                </Select>
            </Label>
            <Input type="submit" value="Submit" />
        </Form>
    );
};
export default GrievanceForm;