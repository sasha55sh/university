interface LibraryItem {
  title: string;
  author: string;
  borrow(): void;
}

class Book implements LibraryItem {
  title: string;
  author: string;
  private pages: number;
  private isBorrowed: boolean;

  constructor(title: string, author: string, pages: number) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isBorrowed = false;
  }

  borrow(): void {
    this.isBorrowed = true;
    console.log(`Книга "${this.title}" була позичена.`);
  }

  isAvailable(): boolean {
    return !this.isBorrowed;
  }
}

class Magazine implements LibraryItem {
  title: string;
  author: string;
  private issueNumber: number;
  private isBorrowed: boolean;

  constructor(title: string, author: string, issueNumber: number) {
    this.title = title;
    this.author = author;
    this.issueNumber = issueNumber;
    this.isBorrowed = false;
  }

  borrow(): void {
    this.isBorrowed = true;
    console.log(`Журнал "${this.title}" був позичений.`);
  }

  isAvailable(): boolean {
    return !this.isBorrowed;
  }
}

class DVD implements LibraryItem {
  title: string;
  author: string;
  private duration: number;
  private isBorrowed: boolean;

  constructor(title: string, author: string, duration: number) {
    this.title = title;
    this.author = author;
    this.duration = duration;
    this.isBorrowed = false;
  }

  borrow(): void {
    this.isBorrowed = true;
    console.log(`DVD "${this.title}" було позичене.`);
  }

  isAvailable(): boolean {
    return !this.isBorrowed;
  }
}

class Library {
  private items: LibraryItem[] = [];

  // Метод для додавання елемента до бібліотеки
  addItem(item: LibraryItem): void {
    this.items.push(item);
    console.log(`Елемент "${item.title}" додано до бібліотеки.`);
  }

  // Метод для пошуку елемента за назвою
  findItemByName(name: string): LibraryItem | undefined {
    for (const item of this.items) {
      if (item.title === name) {
        return item;
      }
    }
    return undefined;
  }

  // Метод для виведення списку доступних елементів
  listAvailableItems(): void {
    const availableItems = this.items.filter((item) => {
      if (item instanceof Book) return item.isAvailable();
      if (item instanceof Magazine) return item.isAvailable();
      if (item instanceof DVD) return item.isAvailable();
      return false;
    });

    if (availableItems.length === 0) {
      console.log("Немає доступних елементів.");
    } else {
      console.log("Доступні елементи бібліотеки:");
      availableItems.forEach((item) => {
        console.log(`Назва: ${item.title}, Автор: ${item.author}`);
      });
    }
  }
}

const book1 = new Book("Чарлі і шоколадна фабрика", "Чарльз Дікенс", 1225);
const magazine1 = new Magazine("Наука і життя", "Редакція", 5);
const dvd1 = new DVD("Інтерстеллар", "Крістофер Нолан", 169);

const library = new Library();

library.addItem(book1);
library.addItem(magazine1);
library.addItem(dvd1);

const searchTitle = "Чарлі і шоколадна фабрика";
const foundItem = library.findItemByName(searchTitle);
if (foundItem) {
  console.log(
    `Знайдено елемент: Назва - ${foundItem.title}, Автор - ${foundItem.author}`
  );
} else {
  console.log(`Елемент з назвою "${searchTitle}" не знайдено.`);
}

library.listAvailableItems();

book1.borrow();
magazine1.borrow();

library.listAvailableItems();
