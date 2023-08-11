import { useState } from 'react';

function RequestInformationModal() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState('');
  const [hasScholarship, setHasScholarship] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic here to handle form submission
    setShowModal(false);
  };

  return (
    <>
      <button type="button" className="btn btn-primary" onClick={() => setShowModal(true)}>
        Request Information
      </button>

      {showModal && (
        <div className="modal-container">
          <div className={`modal${showModal ? ' show' : ''}`} role="dialog" style={{ display: 'block' }}>
            <div className="modal-dialog modal-fullscreen" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Request Information</h5>
                  <button type="button" className="close" onClick={() => setShowModal(false)}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleSubmit} className="d-flex flex-column gap-2">
                    <div className="form-group">
                      <label htmlFor="name">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="name">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="program">Program</label>
                      <select
                        className="form-control"
                        id="program"
                        value={selectedProgram}
                        onChange={(e) => setSelectedProgram(e.target.value)}
                        required
                      >
                        <option value="">Select a program</option>
                        <option value="program1">Program 1</option>
                        <option value="program2">Program 2</option>
                        <option value="program3">Program 3</option>
                      </select>
                    </div>
                    <div className="form-group form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="scholarship"
                        checked={hasScholarship}
                        onChange={(e) => setHasScholarship(e.target.checked)}
                      />
                      <label className="form-check-label" htmlFor="scholarship">Interested in the Work Ready Kentucky Scholarship?</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default RequestInformationModal;
