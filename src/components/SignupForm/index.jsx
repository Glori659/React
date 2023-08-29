import { useState } from "react";
import { useForm } from "react-hook-form";

const SignupForm = () => {
    const { register, handleSubmit, reset, formState: {errors} } = useForm();

   /* const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [phone, setPhone] = useState('');*/

    const handleClearClick = () => {
        reset();
       /* setName('');
        setAge('');
        setAddress('');
        setZipcode('');
        setPhone('');*/  
    };

    const handleSubmitForm = (data) => {
        console.log(data);
        /*evt.preventDefault();
        console.log('submit:', {
            name,
            age,
            address,
            zipcode,
            phone
        });*/
    };

    //console.log(errors);

    return (
        <form onSubmit={handleSubmit(handleSubmitForm)}>
            <label>
                Name 
                {/*<input value={name} onChange={(evt) => setName(evt.target.value)} required />*/}
                <input {...register('name', { required: true})} />
            </label>
            <br />
            <label>
                Age 
                <input {...register('age', { required: true})} />
            </label>
            <br />
            <label>
                Address 
                <input {...register('address', { required: true})} />
            </label>
            <br />
            <label>
                Zipcode 
                <input {...register('zipcode', { required: true})} />
            </label>
            <br />
            <label>
                Phone
                <input {...register('phone', { required: true})} />
            </label>
            <br />
            <div>
                <button type="button" onClick={handleClearClick}>Clear</button>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};

export default SignupForm;