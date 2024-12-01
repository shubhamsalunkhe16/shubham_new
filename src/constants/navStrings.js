const navConstants = {
  HOME: "/",
  SOURCES: "/sources",
  get NAVLINKS() {
    return [
      { label: "Home", path: this.HOME },
      { label: "Sources", path: this.SOURCES },
    ];
  },
};

export default navConstants;
