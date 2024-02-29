const HeaderTable = (props) => {
  return (
    <thead>
      <tr>
        {props.titles.map((title) => {
          return <th key={title}>{title}</th>;
        })}
      </tr>
    </thead>
  );
};

export default HeaderTable;
