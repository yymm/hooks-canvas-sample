const debug = (...v: any[]) => {
  if (process.env.NODE_ENV === "development") {
    console.log(...v);
  }
};

export { debug };
