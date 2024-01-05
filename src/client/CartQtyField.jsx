const CartQtyField = ( {}) => {
  const [itemQuantity, setItemQuantity] = useState(1);

  return (
    <label>
      Quantity:
      <input
        type="number"
        defaultValue={quantity}
        onChange={(e) => setItemQuantity(e.target.value)}
        required
      />
    </label>
  )
}

export default CartQtyField