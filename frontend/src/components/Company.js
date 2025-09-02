function Company(props) {
    const {contact, company, companies, setCompany} = props;

    async function deletePhone() {
        const response = await fetch('http://localhost/api/contacts/' + contact.id + '/company/' + company.id, {
            method: 'DELETE',
        });

        let newCompanies = companies.filter((p) => {
            return p.id !== company.id;
        });

        setCompany(newCompanies);
    }

	return (
		<tr>
            <td>{ company.company_address }</td>
            <td>{ company.company_name }</td>
            <td style={
                {
                    width: '14px',
                }
            }><button className="button red" onClick={deletePhone}>Delete</button></td>
        </tr>
	);
}

export default Company;
