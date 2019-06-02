export const wrappingPaper = (l, w, h) => {
  return (2*l*w + 2*w*h + 2*h*l) + Math.min(l*w, w*h, h*l);
}

export const ribbon = (l, w, h) => {
  return (l*w*h) + Math.min(l+l+w+w, h+h+w+w, l+l+h+h);
}
