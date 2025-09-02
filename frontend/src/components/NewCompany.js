import { useState } from 'react';

function NewCompany(props) {
    const {contact, companies, setCompany} = props;
    const [company_address, setAddress] = useState('');
    const [company_name, setName] = useState('');

    async function createPhone(e) {
        e.preventDefault();

        const response = await fetch('http://localhost/api/contacts/' + contact.id + '/company', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                company_name,
                company_address
            })
        });

        const data = await response.json();

        if (data.id) {
            setCompany([...companies, data]);
        }

        setAddress('');
        setName('');
    }

	return (
        <form onSubmit={createPhone} onClick={(e) => e.stopPropagation()} className='new-phone'>
            <input type='text' placeholder='Company Name' onChange={(e) => setName(e.target.value)} value={company_name}/>
            <input type='text' placeholder='Company Address' onChange={(e) => setAddress(e.target.value)} value={company_address}/>
            <button className='button green' type='submit' >Add {contact.name}'s Company</button>
        </form>
	);
}

export default NewCompany;