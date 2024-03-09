function CustomerCard({ customer }) {
  return (
    <div className="w-[40%] h-[160px] flex bg-slate-950">
      <div className="w-[50%] h-full">
        <img src={customer && customer.picture} alt="" className="w-full h-full object-contain"/>
      </div>
      <div className="w-[50%]">
        <p>Name: {customer.firstName}</p>
        <p>Last name: {customer.lastName}</p>
      </div>
    </div>
  );
}

export default CustomerCard;
