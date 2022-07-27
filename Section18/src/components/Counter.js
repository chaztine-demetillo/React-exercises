import React from "react";
import { useDispatch,useSelector } from "react-redux";
import classes from "./Counter.module.css";
import {counterActions} from '../store/counter';

const Counter = () => {
  const dispatch = useDispatch(); //to get access to dispatch actions functions
  const counter = useSelector((state) => state.counter.counter); // read data from redux management state
  const show = useSelector(state => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const increasetHandler = () => {
    dispatch(counterActions.increase(5));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  }; 

  return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        {show && <div className={classes.value}> {counter}</div>}
        <div>
          <button onClick={incrementHandler}>Increment</button>
          <button onClick={increasetHandler}>Increase 5</button>
          <button onClick={decrementHandler}>Decrement</button>
        </div>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
};

export default Counter;

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }
//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}> {this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }
// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   };
// };
// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({type: 'increment'}),
//     decrement: () => dispatch({type: 'decrement'})
//   }
// };

// export default connect(mapStateToProps,mapDispatchToProps)(Counter);
