var OnlineCourse = /** @class */ (function () {
    function OnlineCourse(name, duration) {
        this.name = name;
        this.duration = duration;
        this.students = [];
    }
    OnlineCourse.prototype.registerStudent = function (student) {
        if (!this.isStudentRegistered(student)) {
            this.students.push(student);
            console.log("\u0421\u0442\u0443\u0434\u0435\u043D\u0442 ".concat(student, " \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043E\u0432\u0430\u043D\u0438\u0439 \u043D\u0430 \u043A\u0443\u0440\u0441 ").concat(this.name, "."));
        }
        else {
            console.log("\u0421\u0442\u0443\u0434\u0435\u043D\u0442 ".concat(student, " \u0432\u0436\u0435 \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043E\u0432\u0430\u043D\u0438\u0439 \u043D\u0430 \u043A\u0443\u0440\u0441 ").concat(this.name, "."));
        }
    };
    OnlineCourse.prototype.isStudentRegistered = function (student) {
        for (var _i = 0, _a = this.students; _i < _a.length; _i++) {
            var s = _a[_i];
            if (s === student) {
                return true;
            }
        }
        return false;
    };
    return OnlineCourse;
}());
var CourseManager = /** @class */ (function () {
    function CourseManager() {
        this.courses = [];
    }
    CourseManager.prototype.addCourse = function (course) {
        this.courses.push(course);
        console.log("\u041A\u0443\u0440\u0441 ".concat(course.name, " \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0434\u043E\u0434\u0430\u043D\u043E."));
    };
    CourseManager.prototype.removeCourse = function (courseName) {
        this.courses = this.courses.filter(function (course) { return course.name !== courseName; });
        console.log("\u041A\u0443\u0440\u0441 ".concat(courseName, " \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E."));
    };
    CourseManager.prototype.findCourse = function (courseName) {
        for (var _i = 0, _a = this.courses; _i < _a.length; _i++) {
            var course = _a[_i];
            if (course.name === courseName) {
                return course;
            }
        }
        return undefined;
    };
    CourseManager.prototype.listCourses = function () {
        if (this.courses.length === 0) {
            console.log("Немає доступних курсів.");
            return;
        }
        this.courses.forEach(function (course) {
            console.log("\u041A\u0443\u0440\u0441: ".concat(course.name));
            console.log("\u0422\u0440\u0438\u0432\u0430\u043B\u0456\u0441\u0442\u044C: ".concat(course.duration, " \u0433\u043E\u0434\u0438\u043D"));
            console.log("\u0421\u0442\u0443\u0434\u0435\u043D\u0442\u0438: ".concat(course.students.length > 0
                ? course.students.join(", ")
                : "Немає зареєстрованих студентів"));
            console.log("--------------------");
        });
    };
    return CourseManager;
}());
