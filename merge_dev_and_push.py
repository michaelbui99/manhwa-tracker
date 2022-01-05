import subprocess

"""
Convenience script that switches to main branch, merges main with development branch, pushes changes 
and switches back to deveoplment branch again. 
This script is intended for only this repository where I'm the only one pushing code, i.e. no merge conflicts are expected.
"""


def print_subprocess_output(subprocess):
    """
    Prints out the subprocess's output + errors 

    :param subprocess: the subprocess. Must have shell=True, capture_out=True and text=True
    """
    print(subprocess.stdout)
    print(subprocess.stderr)


# Check current branch
current_branch = subprocess.run(
    ['git', 'rev-parse', '--abbrev-ref', 'HEAD'], shell=True, capture_output=True, text=True)

print_subprocess_output(current_branch)

# checkout main if on dev branch
if (current_branch.stdout.strip() == "development"):
    checkout_main = subprocess.run(['git', 'checkout', 'main'], shell=True,
                                   capture_output=True, text=True)
    print_subprocess_output(checkout_main)


# merge main with dev branch and push
merge_dev_branch_and_push = subprocess.run(
    ['git', 'merge', 'development', '--no-ff', '&&', 'git', 'push'], shell=True, capture_output=True, text=True)

print_subprocess_output(merge_dev_branch_and_push)

# switch back to dev branch to continue work
checkout_dev = subprocess.run(
    ['git', 'checkout', 'development'], shell=True, capture_output=True, text=True)
