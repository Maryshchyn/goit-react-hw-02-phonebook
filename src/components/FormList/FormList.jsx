

const FormList = ({ contacts, delitForm }) => <ul>{contacts.map(({id, name, number}) =>
    <li key={id}>{name}{number}<button onClick={()=> delitForm(id)}>Видалити</button></li>
)}</ul>
    


export default FormList;