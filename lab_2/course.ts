interface Course {
  name: string;
  duration: number;
  students: string[];
}

class OnlineCourse implements Course {
  name: string;
  duration: number;
  students: string[];

  constructor(name: string, duration: number) {
    this.name = name;
    this.duration = duration;
    this.students = [];
  }

  registerStudent(student: string): void {
    if (!this.isStudentRegistered(student)) {
      this.students.push(student);
      console.log(
        `Студент ${student} успішно зареєстрований на курс ${this.name}.`
      );
    } else {
      console.log(
        `Студент ${student} вже зареєстрований на курс ${this.name}.`
      );
    }
  }

  isStudentRegistered(student: string): boolean {
    for (const s of this.students) {
      if (s === student) {
        return true;
      }
    }
    return false;
  }
}

class CourseManager {
  private courses: Course[] = [];

  addCourse(course: Course): void {
    this.courses.push(course);
    console.log(`Курс ${course.name} успішно додано.`);
  }

  removeCourse(courseName: string): void {
    this.courses = this.courses.filter((course) => course.name !== courseName);
    console.log(`Курс ${courseName} успішно видалено.`);
  }

  findCourse(courseName: string): Course | undefined {
    for (const course of this.courses) {
      if (course.name === courseName) {
        return course;
      }
    }
    return undefined;
  }

  listCourses(): void {
    if (this.courses.length === 0) {
      console.log("Немає доступних курсів.");
      return;
    }

    this.courses.forEach((course) => {
      console.log(`Курс: ${course.name}`);
      console.log(`Тривалість: ${course.duration} годин`);
      console.log(
        `Студенти: ${
          course.students.length > 0
            ? course.students.join(", ")
            : "Немає зареєстрованих студентів"
        }`
      );
      console.log("--------------------");
    });
  }
}
