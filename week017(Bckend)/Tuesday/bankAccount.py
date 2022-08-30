# class Person:
#     def __init__(self, name):
#         self.name = name
#         self.movements = []

#     def __str__(self):
#         return 
#         self.movements

#     def add_movement(self, amount, date, explanation):
#         self.movements.append({
#             "amount": amount,
#             "date": date,
#             "explanation": explanation}
#         )

#     def list_movements(self, amount):
#         print(self.movements)

#     def balance(self):
#         balance = 0
#         for i in self.movements:
#             balance += self.movements[i][0]
#         return balance

class Person:
    def __init__(self, name):
        self.name = name
        self.movements = []

    def __str__(self):
        return self.name

    def add_movement(self, amount, date, explanation):
        mvmt = [amount, date, explanation]
        self.movements.append(mvmt)
        return self.movements

    def list_movements(self):
        return self.movements

    def balance(self):
        balance = 0
        for i in self.movements:
            balance += i[0]
        return balance