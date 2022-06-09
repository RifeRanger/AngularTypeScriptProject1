function CourseItem(itemID: string) {
  return (target: Function) => {
    target.prototype.id = itemID;
  }
}

@CourseItem('ace')
class Astronomy {
  id: string;
}

@CourseItem('gik')
class Reading {
  id: string;
}

console.log(new Astronomy().id);