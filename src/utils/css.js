export const mult = (value,	variable) => `calc(${value} * var(--${variable}))`;
export const unit = (value = 1) => mult(value, "unit");
