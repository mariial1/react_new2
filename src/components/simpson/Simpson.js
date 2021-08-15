import './Simpson.css';

export default function Simpson(props) {

  let {name, surname, age, info, photo} = props;
  let classNameTitle = 'simpson';
  return (
    <div className = {classNameTitle}>
          <h2>{name} {surname}</h2>
          <h3>age is - {age}</h3>
          <h3>{info}</h3>
          <h3>{photo}</h3>
          <hr/>

    </div>
  );
}
