from apartment import Apartment
from sys import stdout as out

result = False

while result == False:
    out.write("How big is the apartment? (in meters): ")
    size = input()

    print('How much did it cost? (in euros)')
    cost = input()

    flat = Apartment(size, cost)
    result = flat.calculate()

    if result:
        print('Square meter cost is {}€'.format(result))
    else:
        print("You didn't insert correct values, try again!")

    print('Do you want to calculate pricing of another apartment? (y/n)')
    answer = input()

    if answer == 'y' or answer == 'yes':
        result = False
