/* The Dependency Inversion Principe(DIP) is a priciple in object-oriented design that states that 
'High-level modules should not depend on low-level modules. Both should depend on abstractions.'
Additionally abstractions should not depend on details . Details should depend on abstractions.

Example: In a software development team, developers depend on an abstract version control system 
(e.g., Git) to manage and track changes to the codebase. 
They don't depend on specific details of how Git works internally.
*/ 


// Interface for version control system simulated via convention
class IVersionControl {
    commit(message) { throw new Error("commit() must be implemented"); }
    push() { throw new Error("push() must be implemented"); }
    pull() { throw new Error("pull() must be implemented"); }
}

// Git version control implementation
class GitVersionControl extends IVersionControl {
    commit(message) {
        console.log("Committing changes to Git with message: " + message);
    }

    push() {
        console.log("Pushing changes to remote Git repository.");
    }

    pull() {
        console.log("Pulling changes from remote Git repository.");
    }
}

// Team class that relies on version control
class DevelopmentTeam {
    constructor(vc) {
        this.versionControl = vc;
    }

    makeCommit(message) {
        this.versionControl.commit(message);
    }

    performPush() {
        this.versionControl.push();
    }

    performPull() {
        this.versionControl.pull();
    }
}

function main() {
    const git = new GitVersionControl();
    const team = new DevelopmentTeam(git);

    team.makeCommit("Initial commit");
    team.performPush();
    team.performPull();
}

main();