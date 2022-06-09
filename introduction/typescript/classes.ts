interface IChildren { name: string, age: number, childType?: string, activity?: () => void}

class childrenSchool implements IChildren {

  constructor(
    public name, public age
  ) {

  }

  private courses() {
    
  }
}