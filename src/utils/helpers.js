export const checkSwatchType = (attribute, item, selectedOptions) => (
    attribute.type === "swatch" &&
    attribute.name === "Color" &&
    item.displayValue ===
    selectedOptions[attribute.name].displayValue
)

export const renderAttributeValue = (large, attribute, item) => {
    if (large) {
        return attribute.type !== "swatch" &&
            (attribute.name === "Size" ? item.value : item.displayValue)
    }

    return attribute.type !== "swatch" &&
        (attribute.name === "Size"
            ? item.value.length > 3
                ? item.value.slice(0, 3)
                : item.value
            : item.displayValue.length > 3
                ? item.displayValue.slice(0, 3)
                : item.value)

}

export const itemsRender = (large,items) => {
    if(large) return items

    return items.length > 4 ? items.slice(0,4) : items
}