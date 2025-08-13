
-- Insert data into competitions Table
INSERT INTO competitions (name, description, start_date, end_date, status) 
VALUES 
('Digimark Innovation competition', 'A competition for students and tech practioneers to innovate solutions for the future.', '2025-03-01', '2025-05-01', 'ongoing');

-- Insert data into competitionPhases Table
INSERT INTO competitionPhases (competition_id, name, start_date, end_date, description) 
VALUES 
(1, 'Phase 1: Launching Event', '2025-03-01', '2025-03-15', 'Competition kickoff.'),
(1, 'Phase 2: Registration phase', '2025-03-16', '2025-04-30', 'Submission of team details and project proposal.'),
(1, 'Phase 3: Development phase', '2025-04-01', '2025-04-15', 'Develop your solution with mentor support.'),
(1, 'Phase 4: Preliminary Judging 1', '2025-04-16', '2025-05-31', 'Initial evaluation of submitted projects.'),
(1, 'Phase 5: Preliminary Judging 2', '2025-04-16', '2025-05-31', 'The second evaluation of submitted projects before the finals.'),
(1, 'Phase 6: Final Presentation', '2025-05-15', '2025-05-30', 'Top teams present their solutions to the jury.');


-- Insert data into competitionPrizes Table
INSERT INTO competitionPrizes (competition_id, name, description, value) 
VALUES 
(1, 'First Place', 'Award for the best tech innovation.', 200000),
(1, 'Second Place', 'Award for the second-best tech innovation.', 100000),
(1, 'third Place', 'Award for the third-best tech innovation.', 70000),
(1, 'forth Place', 'Award for the forth-best tech innovation.', 50000),
(1, 'fifth Place', 'Award for the fifth-best tech innovation.', 25000);
