import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-question-answer',
  templateUrl: 'question-answer.html',
})
export class QuestionAnswerPage {
  public questions= [{"id": "What is JAVA?","answer":"Java is a high-level programming language and is platform independent.Java is a collection of objects. It was developed by Sun Microsystems. There are a lot of applications, websit and Games that are developed using Java." },
  { "id": "What are the features in JAVA?","answer":"Oops concepts  Object-oriented  Inheritance  Encapsulation  Polymorphism  Abstraction  Platform independent: A single program works on ifferent platforms without any modification.  High Performance: JIT (Just In Time compiler) enables high performance in Java. JIT converts the bytecode into machine language and then JVM starts the execution.  Multi-threaded: A flow of execution is known as a Thread. JVM creates a thread which is called main thread. The user can create multiple threads by extending the thread class or by implementing Runnable interface." }, 
  { "id": "How does Java enable high performance?","answer":"Java uses Just In Time compiler to enable high performance. JIT is used to convert the instructions into bytecodes." },
  { "id": "What are the Java IDE’s?","answer":"Eclipse and NetBeans are the IDE’s of JAVA."},
  {"id":"What is meant by Local variable and Instance variable?","answer":"Local variables are defined in the method and scope of the variables that have existed inside the method itself. An instance variable is defined inside the class and outside the method and scope of the variables exist throughout the class."},
  {"id":" What is a Class?","answer":"All Java codes are defined in a class. A Class has variables and methods.Variables are attributes which define the state of a class. Methods are the place where the exact business logic has to be done. It contains a set of statements (or) instructions satisfy the particular requirement."},
  {"id":" What is an Object?","answer":"An instance of a class is called object. The object has state and behavior.Whenever the JVM reads the “new()” keyword then it will create an instance of that class."},
  {"id":"What is Inheritance?","answer":"Inheritance means one class can extend to another class. So that the codes can be reused from one class to another class. Existing class is known as Superclasswhereas the derived class is known as a sub class."},
  {"id":" What is Encapsulation?","answer":"Purpose of Encapsulation:Protects the code from others.Code maintainability."},
  {"id":"What is Polymorphism?","answer":"Polymorphism means many forms. A single object can refer the super class or sub-class depending on the reference type which is called polymorphism." },
  {"id":"What is meant by Interface?","answer":" Multiple inheritance cannot be achieved in java. To overcome this problem Interface concept is introduced.  An interface is a template which has only method declarations and not the method implementation."},
  {"id":"What is meant by Abstract class?","answer":"We can create the Abstract class by using “Abstract” keyword before the class name. An abstract class can have both “Abstract” methods and “Non-abstract” methods that are a concrete class."},
  {"id":"Difference between String, String Builder, and String Buffer?","answer":"String variables are stored in “constant string pool”. Once the string reference changes the old value that exists in the “constant string pool”, it cannot be erased."},
  {"id":"Explain about Public and Private access specifiers?","answer":"Public members are visible in the same package as well as the outside package that is for other packages.Private members are visible in the same class only and not for the other classes in the same package as well as classes in the outside packages."},
  {"id":"Explain about Map?","answer":"cares about unique identifier. We can map a unique key to a specific value. It is a key/value pair. We can search a value, based on the key. Like set, Map also uses “equals ( )” method to determine whether two keys are same or different"},
    {"id":"Explain the Priority Queue?","answer":"Priority Queue: Linked list class has been enhanced to implement the queue interface. Queues can be handled with a linked list. Purpose of a queue is “Priority-in, Priority-out”.  Hence elements are ordered either naturally or according to the comparator. The elements ordering represents their relative priority."},
  {"id":"What is mean by Exception?","answer":"An Exception is a problem that can occur during the normal flow of an execution. A method can throw an exception when something wails at runtime. If that exception couldn’t be handled, then the execution gets terminated before it completes the task."},
  {"id":"What is a Thread?","answer":"In Java, the flow of a execution is called Thread. Every java program has at least one thread called main thread, the Main thread is created by JVM. The user can define their own threads by extending Thread class (or) by implementing Runnable interface. Threads are executed concurrently."},
  {"id":"How do you make a thread in Java?","answer":"There are two ways available in order to make a thread. Extend Thread class:Extending a Thread class and override the run method. The thread is available in java.lang.thread.  Implement Runnable interface: Another way is implementing the runnable interface. For that we should provide the implementation for run () method which is defined in the interface."}
  ];
  // public answers= [
  //   {"id": " " },{ "id": "" },{ "id": " " },{ "id": ""},{"id":""},{"id":""},{"id":""},{"id":""},{"id":""}, {"id":"" },{"id":""},
  //  {"id":""},
  //  {"id":""},
  //  {"id":""},
  //  {"id":""},
  //  {"id":""},
  //  {"id":""},
  //  {"id":""},{"id":""}];
   shownGroup:any;

  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionAnswerPage');
  }
  toggleGroup(group) {
		if (this.isGroupShown(group)) {
			this.shownGroup = null;
		} else {
			this.shownGroup = group;
		}
	};
	isGroupShown(group) {
		return this.shownGroup === group;
	};
}
