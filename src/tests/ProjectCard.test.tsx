import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { ProjectCard } from '../components/projects/ProjectCard';
import { projectsData } from '../data/portfolioData';

describe('ProjectCard Component', () => {
  const sampleProject = projectsData[0];

  it('renders project title, tagline, and technology badges', () => {
    const handlePreview = vi.fn();
    render(
      <BrowserRouter>
        <ProjectCard project={sampleProject} onPreview={handlePreview} />
      </BrowserRouter>
    );

    expect(screen.getByText(sampleProject.title)).toBeInTheDocument();
    expect(screen.getByText(sampleProject.tagline)).toBeInTheDocument();
    expect(screen.getByText(sampleProject.category)).toBeInTheDocument();
  });

  it('triggers onPreview when the Overview button is clicked', () => {
    const handlePreview = vi.fn();
    render(
      <BrowserRouter>
        <ProjectCard project={sampleProject} onPreview={handlePreview} />
      </BrowserRouter>
    );

    const overviewBtn = screen.getByRole('button', { name: new RegExp(`Quick overview of ${sampleProject.title}`, 'i') });
    fireEvent.click(overviewBtn);

    expect(handlePreview).toHaveBeenCalledTimes(1);
    expect(handlePreview).toHaveBeenCalledWith(sampleProject);
  });
});
