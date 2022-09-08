function Item({ id, note, date, time, deleteData,submittingStatue }) {
  function deleteItem() {
    submittingStatue.current = true
    deleteData(function (prev) {
      return prev.filter((item)=>item.id !== id);
    });
  }

  return (
    <div>
      <p>{note}</p>
      <p>{`${date} ${time}`}</p>

      <button onClick={deleteItem}>delete</button>
      <p>---------------</p>
    </div>
  );
}

export default Item;
