all_students = ["나연", "정연", "모모", "사나", "지효", "미나", "다현", "채영", "쯔위"]
present_students = ["정연", "모모", "채영", "쯔위", "사나", "나연", "미나", "다현"]


def get_absent_student(all_array, present_array):
    dict = {}
    for stud in all_array:
        dict[stud] = True

    for stud in present_array:
        del dict[stud]

    for stud in dict:
        return stud

print(get_absent_student(all_students, present_students))