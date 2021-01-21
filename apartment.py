class Apartment:
    size = ''
    cost = ''
    m2price = ''

    def __init__(self, size, cost):
        self.size = size
        self.cost = cost

    def calculate(self):
        """
        This function calculates square meter cost of the apartment
        """

        if self.size.isdecimal() and self.cost.isdecimal():
            self.m2price = int(self.cost)/int(self.size)
            return self.m2price
        else:
            return False
