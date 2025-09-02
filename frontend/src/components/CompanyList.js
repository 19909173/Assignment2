import NewCompany from './NewCompany.js';
import Company from './Company.js';

function CompanyList(props) {
    const {contact, companies, setCompany} = props;

	return (
        <div className='phone-list'>
            <NewCompany companies={companies} setCompany={setCompany} contact={contact} />

            <table onClick={(e) => e.stopPropagation()}>
                <thead>
                    <tr>
                        <th>Company Name</th>
                        <th>Company Address</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        companies.map((company) => {
                            return (
                                <Company key={company.id} company={company} companies={companies} setCompany={setCompany} contact={contact} />
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
	);
}

export default CompanyList;
