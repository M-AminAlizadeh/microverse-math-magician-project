import PropTypes from "prop-types";

const Displayer = ({ obj }) => {
  if (obj === undefined || obj === null) {
    return null; // or return an appropriate fallback component
  } else {
    const show = (obj) => {
      let len = Object.keys(obj).length;
      if (len == "3") {
        if (obj.operation == null && obj.next == null) {
          return obj.total;
        } else if (obj.operation && obj.next == null) {
          return obj.total + " " + obj.operation;
        } else if (obj.operation && obj.next && obj.total) {
          return obj.total + " " + obj.operation + " " + obj.next;
        }
      }
      if (len == "2") {
        return obj.next;
      }
    };

    return <div className="calculator-display number">{show(obj) || 0}</div>;
  }
};

Displayer.propTypes = {
  obj: PropTypes.object.isRequired,
};

export default Displayer;
