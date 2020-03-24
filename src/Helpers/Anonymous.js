const CODE = 'IAMOston';

class Anonymous {

  static uuid() {
    let uuid = '', ii;
    for (ii = 0; ii < 32; ii += 1) {
      switch (ii) {
        case 8:
        case 20:
          uuid += '-';
          uuid += (Math.random() * 16 | 0).toString(16);
          break;
        case 12:
          uuid += '-';
          uuid += '4';
          break;
        case 16:
          uuid += '-';
          uuid += (Math.random() * 4 | 8).toString(16);
          break;
        default:
          uuid += (Math.random() * 16 | 0).toString(16);
      }
    }
    return uuid;
  }

  static hasAnonymousID() {
    return !!localStorage.getItem(CODE);
  }

  static getAnonymous() {
    return localStorage.getItem(CODE);
  }

  static generateAnonymous() {
    this.generateLocalStorage();
    this.generateCookie();

    return this;
  }

  static generateLocalStorage() {
    localStorage.setItem(CODE, this.uuid());
    return this;
  }

  static generateCookie(){
    document.cookie = CODE + '=' + this.getAnonymous();
    return this;
  }


  static init(){
    if (!this.hasAnonymousID()) {
      this.generateAnonymous();
    } else {
      this.getAnonymous();
    }

    return this.getAnonymous();
  }
}

export default Anonymous;
