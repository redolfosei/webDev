people = [
    {"name": "Tede", "house": "PotterHouse"},
    {"name": "Appiah", "house": "PensrionHouse"},
    {"name": "Robert", "house": "ClawsHouse"}
]

def f(person):
    return person["name"]

people.sort(key=f)
# print(people)


# the above can be completed with a lambda function this way: 
people = [
    {"name": "Tede", "house": "PotterHouse"},
    {"name": "Appiah", "house": "PensrionHouse"},
    {"name": "Robert", "house": "ClawsHouse"}
]
people.sort(key=lambda person: person["name"])
print(people)
