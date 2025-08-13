-- Drop existing tables if they exist
DROP TABLE IF EXISTS competitionResults CASCADE;
DROP TABLE IF EXISTS competitionPrizes CASCADE;
DROP TABLE IF EXISTS competitionScores CASCADE;
DROP TABLE IF EXISTS competitionSubmissions CASCADE;
DROP TABLE IF EXISTS competitionPhases CASCADE;
DROP TABLE IF EXISTS competitionGroupMembers CASCADE;
DROP TABLE IF EXISTS competitionGroups CASCADE;
DROP TABLE IF EXISTS competitions CASCADE;
DROP TABLE IF EXISTS competitionMembers CASCADE;


-- members Table (Stores information about participants and admins)
CREATE TABLE competitionMembers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    institution VARCHAR(255),
    dob DATE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(9) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Competitions Table (Stores competition details)
CREATE TABLE competitions (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    start_date TIMESTAMP,
    end_date TIMESTAMP,
    status VARCHAR(50) CHECK (status IN ('upcoming', 'ongoing', 'completed')) DEFAULT 'upcoming'
);

-- Groups Table (Stores information about groups in each competition)
CREATE TABLE competitionGroups (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    leader_id INT,
    competition_id INT,
    team_size INT CHECK (team_size BETWEEN 3 AND 5),
    institution VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (competition_id) REFERENCES competitions(id),
    FOREIGN KEY (leader_id) REFERENCES competitionMembers(id)
);

-- Group Members Table (Stores all members of each group, including the leader)
CREATE TABLE competitionGroupMembers (
    id SERIAL PRIMARY KEY,
    competitionGroup_id INT,
    competitionMember_id INT,
    is_leader BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (competitionGroup_id) REFERENCES competitionGroups(id),
    FOREIGN KEY (competitionMember_id) REFERENCES competitionMembers(id)
    -- UNIQUE(competitionGroup_id, competitionMember_id)
);

-- Phases Table (Stores information about different phases in the competition)
CREATE TABLE competitionPhases (
    id SERIAL PRIMARY KEY,
    competition_id INT,
    name VARCHAR(255) NOT NULL,
    start_date TIMESTAMP,
    end_date TIMESTAMP,
    description TEXT,
    FOREIGN KEY (competition_id) REFERENCES competitions(id)
);

-- Submissions Table (Stores project submissions for each group in each phase)
CREATE TABLE competitionSubmissions (
    id SERIAL PRIMARY KEY,
    competitionGroup_id INT,
    competitionPhase_id INT,
    submission_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    file_url VARCHAR(255),
    status VARCHAR(50) CHECK (status IN ('submitted', 'pending', 'disqualified', 'approved')) DEFAULT 'submitted',
    FOREIGN KEY (competitionGroup_id) REFERENCES competitionGroups(id),
    FOREIGN KEY (competitionGroup_id) REFERENCES competitionGroups(id)
);

-- Scores Table (Stores evaluation scores for group submissions)
CREATE TABLE competitionScores (
    id SERIAL PRIMARY KEY,
    competitionSubmission_id INT,
    score DECIMAL(5, 2),
    feedback TEXT,
    FOREIGN KEY (competitionSubmission_id) REFERENCES competitionSubmissions(id)
);

-- Prizes Table (Stores prizes for competition winners)
CREATE TABLE competitionPrizes (
    id SERIAL PRIMARY KEY,
    competition_id INT,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    value DECIMAL(10, 2),
    awarded_to_group INT,
    FOREIGN KEY (competition_id) REFERENCES competitions(id),
    FOREIGN KEY (awarded_to_group) REFERENCES competitionGroups(id)
);

-- Results Table (Stores final results of the competition with group rankings)
CREATE TABLE competitionResults (
    id SERIAL PRIMARY KEY,
    competition_id INT,
    competitionGroup_id INT,
    rank INT,
    total_score DECIMAL(5, 2),
    FOREIGN KEY (competition_id) REFERENCES competitions(id),
    FOREIGN KEY (competitionGroup_id) REFERENCES competitionGroups(id)
);
