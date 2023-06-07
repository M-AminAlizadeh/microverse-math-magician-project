/* eslint-disable */
const Displayer = ({ obj }) => {
  console.log(obj);
  return (
    <div className='calculator-display number'>
      {obj.total === null ? 0 : obj.total}
    </div>
  );
};

export default Displayer;
