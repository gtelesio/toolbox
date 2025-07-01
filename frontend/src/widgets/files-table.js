import React from 'react'
import { Table } from 'react-bootstrap'

export function FilesTable({ files }) {
  if (!files || files.length === 0) return null
  return (
    <>
      {files.map(file => (
        <div key={file.file} className="mb-5">
          <h4>{file.file}</h4>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Text</th>
                <th>Number</th>
                <th>Hex</th>
              </tr>
            </thead>
            <tbody>
              {file.lines.map((line, idx) => (
                <tr key={idx}>
                  <td>{line.text}</td>
                  <td>{line.number}</td>
                  <td>{line.hex}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ))}
    </>
  )
} 