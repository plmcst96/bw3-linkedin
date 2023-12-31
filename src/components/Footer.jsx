import { Dropdown } from 'react-bootstrap'
import { QuestionCircleFill, ShieldShaded, Gear } from 'react-bootstrap-icons'

const Footer = () => {
  return (
    <div
      className="bg-white  text-center d-none d-lg-flex align-items-center justify-content-center p-3 mt-5"
      style={{ fontSize: '14px' }}
    >
      <div className="d-flex">
        <div className=" mx-2">
          <a
            className=" d-block p-2 text-start text-decoration-none text-dark"
            href="./"
          >
            Informazioni
          </a>
          <a
            className=" d-block p-2 text-start text-decoration-none text-dark"
            href="./"
          >
            Linee guida della community
          </a>
          <a
            className=" d-block p-2 text-start text-decoration-none text-dark"
            href="./"
          >
            Privacy e condizioni
          </a>
          <a
            className=" d-block p-2 text-start text-decoration-none text-dark"
            href="./"
          >
            Sales Solutions
          </a>
          <a
            className=" d-block p-2 text-start text-decoration-none text-dark"
            href="./"
          >
            Centro sicurezza
          </a>
        </div>

        <div className=" mx-2">
          <a
            className=" d-block p-2 text-start text-decoration-none text-dark"
            href="./"
          >
            Accessibilità
          </a>
          <a
            className=" d-block p-2 text-start text-decoration-none text-dark"
            href="./"
          >
            Carriera{' '}
          </a>
          <a
            className=" d-block p-2 text-start text-decoration-none text-dark"
            href="./"
          >
            Opzioni per gli annunci <br />
            pubblicitari
          </a>
          <a
            className=" d-block p-2 text-start text-decoration-none text-dark"
            href="./"
          >
            Mobile
          </a>
        </div>
        <div className=" mx-2">
          <a
            className=" d-block p-2 text-start text-decoration-none text-dark"
            href="./"
          >
            Talent Solutions
          </a>
          <a
            className=" d-block p-2 text-start text-decoration-none text-dark"
            href="./"
          >
            Soluzioni di marketing
          </a>
          <a
            className=" d-block p-2 text-start text-decoration-none text-dark"
            href="./"
          >
            Pubblicità
          </a>
          <a
            className=" d-block p-2 text-start text-decoration-none text-dark"
            href="./"
          >
            Piccole imprese
          </a>
        </div>
        <div className=" mx-2 d-flex flex-column ">
          <div className="d-flex justify-content-start">
            <QuestionCircleFill className="fs-3" />{' '}
            <div>
              {' '}
              <a
                className=" d-block p-2 text-start f text-decoration-none text-dark"
                href="./"
              >
                <strong>Domande?</strong> <br />
                Visita il nostro Centro assistenza.{' '}
              </a>
            </div>
          </div>
          <div className="d-flex text-start">
            <Gear className="fs-3" />{' '}
            <div>
              {' '}
              <a
                className=" d-block p-2 text-start f text-decoration-none text-dark"
                href="./"
              >
                <strong>
                  Gestisci il tuo account e <br />
                  la tua privacy
                </strong>{' '}
                <br />
                Vai alle impostazioni{' '}
              </a>
            </div>
          </div>
          <div className="d-flex text-start">
            <ShieldShaded className="fs-3" />{' '}
            <div>
              <a
                className=" d-block p-2 text-start f text-decoration-none text-dark"
                href="./"
              >
                <strong>Trasparenza sui contenuti consigliati</strong> <br />{' '}
                Scopri di più sui contenuti consigliati.
              </a>
            </div>
          </div>
        </div>
        <Dropdown
          className="border border-dark border-1"
          style={{ height: 'fit-content' }}
        >
          <Dropdown.Toggle variant="white" id="dropdown-basic">
            <span style={{ fontSize: '14px' }}>Selezione Lingua </span>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Italiano</Dropdown.Item>
            <Dropdown.Item href="#/action-2">English</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Serbian</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  )
}

export default Footer
