

const ListedBook = () => {
  return (
    <div>
      <h1 className="text-5xl mb-14">Listed Book</h1>

      <div role="tablist" className="tabs tabs-lifted">
  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read List" />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
    Books i read
  </div>

  <input
    type="radio"
    name="my_tabs_2"
    role="tab"
    className="tab"
    aria-label="Wish List"
    defaultChecked />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
    My Wishg list
  </div>

</div>
    </div>
  )
}

export default ListedBook
