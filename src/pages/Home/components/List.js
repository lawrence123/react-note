import Item from "./Item";
function List({ listData, deleteData ,submittingStatue}) {
  return (
    <div>
      {listData.map((item) => {
        const { note, date, time, id } = item;
        return (
          <Item
            key={id}
            id={id}
            note={note}
            date={date}
            time={time}
            deleteData={deleteData}
            submittingStatue={submittingStatue}
          />
        );
      })}
    </div>
  );
}

export default List;
