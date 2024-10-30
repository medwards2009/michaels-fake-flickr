import WaitTimesWrapper from "../waittimes/_components/WaitTimesWrapper";

export default function ServerActionDemo() {
  return (
    <WaitTimesWrapper title="Server actions demo">
      <div className="w-96">
        <form action="#" method="POST">
          <div>
            <label htmlFor="todo">Todo</label>
            <div>
              <input
                id="todo"
                name="text"
                type="text"
                placeholder="What needs to be done?"
                required
              />
            </div>
          </div>
          <div>
            <button type="submit">Add Todo</button>
          </div>
        </form>
      </div>
    </WaitTimesWrapper>
  );
}
