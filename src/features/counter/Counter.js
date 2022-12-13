import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Counter = () => {
  //use useSelector when want to grab state from store,
  //we can grab back the actual name in store.js ex: counter
  //inside "counter" we have the "initialstate" of "count" inside "counterSlice.js"
  // thats why "state.counter.count"
  const count = useSelector((state) => state.counter.count);
  //use useDispatch to get the action form the "counterSlice.js"
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState(0);

  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  const navigate = useNavigate();

  const linkTo = () => {
    //it will add page2 at the end of the url
    navigate("/Page2");
  };

  const linkToGoogle = () => {
    window.location.href = "https://www.google.com/";
  };

  return (
    <section>
      <p>{count}</p>
      <div>
        {/* anonymous function >>> () => dispatch */}
        {/* inside dispatch we can pass any of those actions */}
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <input
        type="text"
        value={incrementAmount}
        //e means event
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <div>
        <button
          onClick={() =>
            //when user click, we're going to dispatch that action and
            //make sure you pass that action to payload
            dispatch(incrementByAmount(addValue))
          }
        >
          Add Amount
        </button>
        <button onClick={resetAll}>Reset</button>
      </div>
      <Link to="page1">
        <button>Go To Page 1 using Link </button>
      </Link>
      <button onClick={() => linkTo()}>Go To Page 2 using useNavigate</button>
      <button onClick={() => linkToGoogle()}>Go To External Url Google</button>
    </section>
  );
};

export default Counter;
