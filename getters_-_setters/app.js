function User() {
	var name, Surname;
	var self = this;

	this.setFirstName = function(getname){
		return self.name = getname;
	}

	this.setSurname = function(getSurname){
		return self.Surname = getSurname;
	}

	this.getFullName = function(){
		alert(self.name + " " + self.Surname);
	}
}

var user = new User();
user.setFirstName("Петя");
user.setSurname("Иванов");

user.getFullName() ; // Петя Иванов
alert(user.name);
alert(user.Surname);
