"use client";
import React, { useState } from 'react'
import { Container, Row, Col, Form, Alert, Spinner } from 'react-bootstrap'
import { useFiles } from '../shared/lib/hooks/use-files'
import { FilesTable } from '../widgets/files-table'
import { Button } from '../shared/ui/button'

export default function HomePage() {
  const [fileName, setFileName] = useState('')
  const [filter, setFilter] = useState('')
  const { files, loading, error } = useFiles(filter)

  const handleFilter = (e) => {
    e.preventDefault()
    setFilter(fileName)
  }

  return (
    <Container className="py-4">
      <h1 className="mb-4">Files Data Viewer</h1>
      <Form onSubmit={handleFilter} className="mb-4">
        <Row>
          <Col md={4}>
            <Form.Control
              type="text"
              placeholder="Filter by file name..."
              value={fileName}
              onChange={e => setFileName(e.target.value)}
            />
          </Col>
          <Col md="auto">
            <Button type="submit" variant="primary">Filter</Button>
          </Col>
        </Row>
      </Form>
      {loading && <Spinner animation="border" />}
      {error && <Alert variant="danger">{error}</Alert>}
      <FilesTable files={files} />
    </Container>
  )
} 