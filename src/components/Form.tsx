import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import categories from '../services/categories';


const schema = z.object({
    description: z
        .string()
        .min(3, {message: 'Item description is required and should be at least 3 characters long.'})
        .max(35, {message: 'Item description should not exceed 35 characters.'}),
    amount: z
        .number({invalid_type_error: 'Amount is required.'})
        .min(0.01, {message: 'Item amount should be at least 1 euro cent.'})
        .max(100_000, {message: 'Item amount should not exceed 100 thousand.'}),
    category: z
        .enum(categories, { errorMap: () => ({message: 'Please select a category.'}) }),
});

type ExpenseFormData = z.infer <typeof schema>;

interface Props {
    onSubmit: (data: ExpenseFormData) => void;
}

const Form = ( {onSubmit}:Props ) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

  return (
    <>
    <div id="passwordHelpBlock" className="form-text mb-3" >
        Fill the form with a new item, all fields are required*
    </div>
    <form onSubmit={handleSubmit( data => {
        onSubmit(data);
        reset(); } )
        }>

    <div className="mb-3">
        {/* <label htmlFor='description' className="form-label">Item Description</label> */}
        <input {...register('description')} id='description' type="string" className="form-control" placeholder="Description"></input>
        { errors.description && <p className='text-danger'>{ errors.description.message }</p> }
    </div>

    <div className="mb-3">
        {/* <label htmlFor='amount' className="form-label">Item Price</label> */}
        <input {...register('amount', {valueAsNumber: true})} id = 'amount' type="number" className="form-control" min="0.00" step="0.01" placeholder="Amount"></input>
        { errors.amount && <p className='text-danger'>{ errors.amount.message }</p> }
    </div>

    <div className="mb-3">
        {/* <label htmlFor='category' className="form-label">Item Category</label> */}
        <select {...register('category')} id='category' className="form-select">
            <option value='' >Category</option>
            { categories.map(category => <option key={category} value={category}>{category}</option>) } 
        </select>
        { errors.category && <p className='text-danger'>{ errors.category.message }</p> }
    </div>

    <button type="submit" className="btn btn-outline-primary rounded-0">Submit</button>
    </form>
    </>);
};

export default Form;
